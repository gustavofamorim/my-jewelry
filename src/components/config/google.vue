<template lang="html">
  <div class="google-drive">
    <h3>Fazer login no Google Drive</h3>
    <div class="authorize" v-if="!isSignedIn" >
      <p>Para salvar os dados do seu aplicativo, é preciso autorizar o acesso ao seu Google Drive.</p>
      <button @click="signIn">Autorizar</button>
    </div>
    <div class="authorized" v-else>
      <p>Seus dados estão sendo sincronizados com o Google Drive.</p>
      <div class="options">
        <button @click="signOut">Sair</button>
        <button @click="backupData" v-if="!sendingFile && !message">Fazer Backup Agora</button>
        <button v-else-if="message">{{ message }}</button>
        <button v-else><fa icon="spinner" spin/></button>
      </div>
    </div>
    <div class="error" v-if="error">
      <p>Oops... Aconteceu um erro :(</p>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

let gapi = window.gapi

export default {
  data: () => ({
    error: '',
    message: '',
    isSignedIn: false,
    sendingFile: false,
    scopes: process.env.VUE_APP_GOOGLE_API_SCOPES,
    api_key: process.env.VUE_APP_GOOGLE_API_KEY,
    client_id: process.env.VUE_APP_GOOGLE_API_CLIENT_ID,
    discovery_docs: process.env.VUE_APP_GOOGLE_API_DISCOVERY_DOCS
  }),
  mounted () {
    gapi.load('client:auth2', this.initClient)
  },
  computed: {
    ...mapGetters('storage', { appData: 'persistence' })
  },
  methods: {
    initClient () {
      gapi.client.init({
        apiKey: this.api_key,
        clientId: this.client_id,
        scope: this.scopes
      }).then(() => {
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus)
        this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
      }, error => {
        this.error = JSON.stringify(error, null, 2)
      })
    },
    signIn () {
      gapi.auth2.getAuthInstance().signIn()
    },
    signOut () {
      gapi.auth2.getAuthInstance().signOut()
    },
    updateSigninStatus (isSignedIn) {
      this.isSignedIn = isSignedIn
    },
    backupData () {
      this.sendingFile = true
      this.uploadJsonFile(this.appData, (response) => {
        if (response.status !== 200) {
          this.error = response.statusText
        } else {
          this.sendingFile = false
          this.message = 'Tudo enviado! =D'

          setTimeout(() => {
            this.message = ''
          }, 1000)
        }
      })
    },
    uploadJsonFile (jsonData, callback) {
      if (!this.appData) return

      const boundary = '-------314159265358979323846'
      const delimiter = '\r\n--' + boundary + '\r\n'
      const closeDelimiter = '\r\n--' + boundary + '--'

      var metadata = {
        'name': 'my-jewelry-backup.json',
        'mimeType': 'application/json\r\n\r\n'
      }

      var multipartRequestBody = delimiter + 'Content-Type: application/json\r\n\r\n' + JSON.stringify(metadata) + delimiter + 'Content-Type: ' + 'application/json\r\n\r\n' + jsonData + closeDelimiter

      gapi.client.request({
        'path': '/upload/drive/v3/files',
        'method': 'POST',
        'params': {
          'uploadType': 'multipart'
        },
        'headers': {
          'Content-Type': 'multipart/related; boundary="' + boundary + '"'
        },
        'body': multipartRequestBody
      }).then((response) => {
        callback(response)
      })
    }
  }
}
</script>

<style scoped lang="scss">

.authorize {
  button {
    width: 100%;
  }
}

.authorized {

  .options {
    display: grid;
    column-gap: 5px;
    grid-template-columns: 1fr 1fr;
  }
}

.error {
  padding: 10px;
  text-align: left;

  p {
    margin: 0px;
  }

  pre {
    padding: 5px;
    border-radius: 5px;
    background-color: #ccc;
    overflow: scroll;
  }
}
</style>
