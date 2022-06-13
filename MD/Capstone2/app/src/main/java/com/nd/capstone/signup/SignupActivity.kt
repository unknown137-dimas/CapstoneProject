package com.nd.capstone.signup

import android.content.Context
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.WindowInsets
import android.view.WindowManager
import androidx.appcompat.app.AlertDialog
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.preferencesDataStore
import androidx.lifecycle.ViewModelProvider
import com.nd.capstone.R
import com.nd.capstone.ViewModelFactory
import com.nd.capstone.databinding.ActivitySignupBinding
import com.nd.capstone.model.UserPreference

private val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "settings")

class SignupActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySignupBinding
    private lateinit var signupViewModel: SignupViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySignupBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setupView()
        setupViewModel()
        setupAction()
    }
    private fun setupView() {
        @Suppress("DEPRECATION")
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            window.insetsController?.hide(WindowInsets.Type.statusBars())
        } else {
            window.setFlags(
                WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN
            )
        }
        supportActionBar?.hide()
    }

    private fun setupViewModel() {
        signupViewModel = ViewModelProvider(
            this,
            ViewModelFactory(UserPreference.getInstance(dataStore))
        )[SignupViewModel::class.java]
    }

    private fun setupAction() {
        binding.signupButton.setOnClickListener {
            val name = binding.nameEditText.text.toString()
            val email = binding.emailEditText.text.toString()
            val password = binding.passwordEditText.text.toString()
            when {
                name.isEmpty() -> {
                    binding.nameEditTextLayout.error = "Masukkan email"
                }
                email.isEmpty() -> {
                    binding.emailEditTextLayout.error = "Masukkan email"
                }
                password.isEmpty() -> {
                    binding.passwordEditTextLayout.error = "Masukkan password"
                }
                else -> {
                    signupViewModel.SignupUser(name, email, password)
                    signupViewModel.isSignup.observe(this) {
                        if(it) {
                            AlertDialog.Builder(this).apply {
                                setTitle("Yeah!")
                                setMessage("Akunmu sudah jadi nih. Silakan Login")
                                setPositiveButton("Lanjut") { _, _ ->
                                    finish()
                                }
                                create()
                                show()
                            }
                        }
                        else {
                            AlertDialog.Builder(this).apply {
                                setTitle("WADUH")
                                setMessage("Pendaftaran anda tidak berhasil:"+ signupViewModel)
                                setPositiveButton("Ulang") { _, _ ->
                                    finish()
                                }
                                create()
                                show()
                            }
                        }
                    }
                }
            }
        }
    }
}

