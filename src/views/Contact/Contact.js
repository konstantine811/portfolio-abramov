import axios from "axios";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      responseData: {
        success: null,
        error: null
      },
      errorSend: null
    };
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      message: { required, minLength: minLength(10) }
    }
  },
  methods: {
    sendMessage() {
      this.$v.$touch();
      if (this.$v.form.$error) {
        return;
      }
      axios
        .post("http://localhost:8080/api/send", {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message
        })
        .then(response => {
          if (response.data.success) {
            this.responseData = {
              success: response.data.message
            };
          }
          if (response.data.error) {
            this.responseData = {
              error: response.data.message
            };
          }
        })
        .catch(error => {
          this.errorSend = error;
        });
    }
  }
};
