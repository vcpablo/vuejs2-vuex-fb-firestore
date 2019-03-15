<template>
  <section>
    <form novalidate @submit.prevent="save">
      <md-card class="md-layout-item md-size-50 md-small-size-100 padding">
        <md-card-header>
          <div class="md-title">Transaction</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <!-- Description -->
              <md-field :class="getValidationClass('description')">
                <label for="description">Description</label>
                <md-input name="description" id="description" autocomplete="given-name" v-model="form.description" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.description.required">The description is required</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <!-- Value -->
              <md-field :class="getValidationClass('value')">
                <label for="value">Value</label>
                <md-input type="number" name="value" id="value" v-model="form.value" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.value.required">The value is required</span>
                <span class="md-error" v-if="!$v.form.value.decimal">The value must be decimal</span>
              </md-field>
            </div>
        </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <!-- Type -->
              <md-field :class="getValidationClass('type')">
                <label for="type">Type</label>
                <md-select name="type" id="type" v-model="form.type" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="Credit">Credit</md-option>
                  <md-option value="Debit">Debit</md-option>
                </md-select>
                <span class="md-error">The type is required</span>
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
        <md-card-actions>
          <!-- Save -->
          <md-button
            type="submit"
            class="md-success md-raised md-primary"
            :disabled="sending">
              <span v-if="!sending">Create Transaction</span>
              <span v-else>
                Aguarde...
              </span>
            </md-button>
        </md-card-actions>
      </md-card>
    </form>
  </section>
</template>

<script>
import Loading from './Loading'
import { EventBus } from '../EventBus'
import { validationMixin } from 'vuelidate'
import { transactionsMethods } from '../state/helpers'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'TransactionForm',
  components: {
    Loading
  },
  mixins: [validationMixin],
  data: () => ({
    form: {
      description: null,
      value: null,
      type: null,
      date: null
    },
    transactionSaved: false,
    sending: false
  }),
  validations: {
    form: {
      description: {
        required
      },
      value: {
        required,
        decimal: (value) => {
          if (typeof value === 'undefined' || value === null || value === '') {
            return true
          }
          return /^\d+(\.\d{1,2})?$/.test(value)
        }
      },
      type: {
        required
      }
    }
  },
  methods: {
    ...transactionsMethods,
    /**
     * Returns the validation class to be applied in the field wrapper
     */
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    /**
     * Saves the transactions after validating it
     */
    save () {
      if (this.validate()) {
        this.sending = true
        this.createTransaction(this.form).then(() => {
          EventBus.$emit('toastr', { show: true, message: 'Transaction successfully created' })
          this.$router.push('/')
        })
      }
    },
    /**
     * Validates the transaction
     */
    validate () {
      this.$v.$touch()
      return !this.$v.$invalid
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .padding {
     padding: 20px
  }
</style>
