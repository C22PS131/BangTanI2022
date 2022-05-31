package com.ayuning.bangtani.ui.signup

import android.animation.AnimatorSet
import android.animation.ObjectAnimator
import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import com.ayuning.bangtani.R.string
import com.ayuning.bangtani.data.auth.AuthBody
import com.ayuning.bangtani.databinding.ActivityRegisterBinding
import com.ayuning.bangtani.ui.login.LoginActivity
import com.ayuning.bangtani.util.UIConstVal
import com.ayuning.bangtani.util.isEmailValid

class RegisterActivity : AppCompatActivity() {

    private var activitySignUpBinding1: ActivityRegisterBinding? = null
    private val binding get() = activitySignUpBinding1!!

    companion object {
        fun start(context: Context) {
            val intent = Intent(context, RegisterActivity::class.java)
            context.startActivity(intent)
        }
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        activitySignUpBinding1 = ActivityRegisterBinding.inflate(layoutInflater)
        setContentView(activitySignUpBinding1?.root)

        initAction()
        playAnimation()
    }

    private fun initAction() {
        binding.btnRegister.setOnClickListener {
            val userName = binding.edtName.text.toString()
            val userEmail = binding.edtEmail.text.toString()
            val userPassword = binding.edtPassword.text.toString()

            Handler(Looper.getMainLooper()).postDelayed({
                when {
                    userName.isBlank() -> binding.edtName.error = getString(string.error_empty_name)
                    userEmail.isBlank() -> binding.edtEmail.error = getString(string.error_empty_email)
                    !userEmail.isEmailValid() -> binding.edtEmail.error = getString(string.error_invalid_email)
                    userPassword.isBlank() -> binding.edtPassword.error = getString(string.error_empty_password)
                    else -> {
                        val request = AuthBody(
                            userName, userEmail, userPassword
                        )
                    }
                }
            }, UIConstVal.ACTION_DELAYED_TIME)
        }
        binding.tvToLogin.setOnClickListener {
            LoginActivity.start(this)
        }
    }

    private fun playAnimation(){

        val message = ObjectAnimator.ofFloat(binding.tvWelcomeTitle, View.ALPHA, 1f).setDuration(500)
        val message1 = ObjectAnimator.ofFloat(binding.tvWelcomeDesc, View.ALPHA, 1f).setDuration(500)
        val nam = ObjectAnimator.ofFloat(binding.tvNameTitle, View.ALPHA, 1f).setDuration(500)
        val nam1 = ObjectAnimator.ofFloat(binding.edtName, View.ALPHA, 1f).setDuration(500)
        val email = ObjectAnimator.ofFloat(binding.tvEmailTitle, View.ALPHA, 1f).setDuration(500)
        val email1 = ObjectAnimator.ofFloat(binding.edtEmail, View.ALPHA, 1f).setDuration(500)
        val password = ObjectAnimator.ofFloat(binding.tvPasswordTitle, View.ALPHA, 1f).setDuration(500)
        val password1 = ObjectAnimator.ofFloat(binding.edtPassword, View.ALPHA, 1f).setDuration(500)
        val regisbtn = ObjectAnimator.ofFloat(binding.btnRegister, View.ALPHA, 1f).setDuration(500)
        val already = ObjectAnimator.ofFloat(binding.layoutTextRegister, View.ALPHA, 1f).setDuration(500)


        val together = AnimatorSet().apply {
            playTogether(message, message1)
        }

        AnimatorSet().apply {
            playSequentially(together, nam, nam1, email, email1, password, password1, regisbtn, already)
            start()
        }
    }

    private fun showLoading(isLoading: Boolean) {
        binding.progressBar.visibility = if (isLoading) View.VISIBLE else View.GONE
        binding.edtName.isClickable = !isLoading
        binding.edtName.isEnabled = !isLoading
        binding.edtEmail.isClickable = !isLoading
        binding.edtEmail.isEnabled = !isLoading
        binding.edtPassword.isClickable = !isLoading
        binding.edtPassword.isEnabled = !isLoading
        binding.btnRegister.isClickable = !isLoading
    }
}