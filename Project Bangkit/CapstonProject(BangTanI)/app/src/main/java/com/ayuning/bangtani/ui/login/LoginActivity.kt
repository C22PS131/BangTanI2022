package com.ayuning.bangtani.ui.login

import android.animation.AnimatorSet
import android.animation.ObjectAnimator
import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.ayuning.bangtani.R.string
import com.ayuning.bangtani.data.auth.AuthLoginBody
import com.ayuning.bangtani.databinding.ActivityLoginBinding
import com.ayuning.bangtani.ui.signup.RegisterActivity
import com.ayuning.bangtani.util.gone
import com.ayuning.bangtani.util.show

class LoginActivity : AppCompatActivity() {

    private var activityLoginBinding1: ActivityLoginBinding? = null
    private val binding get() = activityLoginBinding1!!

    companion object {

        fun start(context: Context) {
            val intent = Intent(context, LoginActivity::class.java)
            context.startActivity(intent)
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        activityLoginBinding1 = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(activityLoginBinding1?.root)

        initAction()
        playAnimation()
    }

    private fun initAction() {
        binding.btnLogin.setOnClickListener {
            val userEmail = binding.edtEmail.text.toString()
            val userPassword = binding.edtPassword.text.toString()

            when {
                userEmail.isBlank() -> {
                    binding.edtEmail.requestFocus()
                    binding.edtEmail.error = getString(string.error_empty_password)
                }
                userPassword.isBlank() -> {
                    binding.edtPassword.requestFocus()
                    binding.edtPassword.error = getString(string.error_empty_password)
                }
                else -> {
                    val request = AuthLoginBody(
                        userEmail, userPassword
                    )

                }
            }
        }
        binding.tvToRegister.setOnClickListener {
            RegisterActivity.start(this)
        }
    }

    private fun playAnimation(){
        val message = ObjectAnimator.ofFloat(binding.tvWelcomeTitle, View.ALPHA, 1f).setDuration(500)
        val message1 = ObjectAnimator.ofFloat(binding.tvWelcomeDesc, View.ALPHA, 1f).setDuration(500)
        val email = ObjectAnimator.ofFloat(binding.tvEmailTitle, View.ALPHA, 1f).setDuration(500)
        val email1 = ObjectAnimator.ofFloat(binding.edtEmail, View.ALPHA, 1f).setDuration(500)
        val password = ObjectAnimator.ofFloat(binding.tvPasswordTitle, View.ALPHA, 1f).setDuration(500)
        val password1 = ObjectAnimator.ofFloat(binding.edtPassword, View.ALPHA, 1f).setDuration(500)
        val login = ObjectAnimator.ofFloat(binding.btnLogin, View.ALPHA, 1f).setDuration(500)
        val regis = ObjectAnimator.ofFloat(binding.layoutTextRegister, View.ALPHA, 1f).setDuration(500)


        val together = AnimatorSet().apply {
            playTogether(message, message1)
        }

        AnimatorSet().apply {
            playSequentially(together, email, email1, password, password1, login, regis)
            start()
        }
    }

    private fun showLoading(isLoading: Boolean) {
        if (isLoading) binding.progressBar.show() else binding.progressBar.gone()
        if (isLoading) binding.bgDim.show() else binding.bgDim.gone()
        binding.edtEmail.isClickable = !isLoading
        binding.edtEmail.isEnabled = !isLoading
        binding.edtPassword.isClickable = !isLoading
        binding.edtPassword.isEnabled = !isLoading
        binding.btnLogin.isClickable = !isLoading
    }
}