package com.nd.capstone.login

import android.util.Log
import androidx.lifecycle.*
import com.nd.capstone.ApiConfig
import com.nd.capstone.model.UserPreference
import com.nd.capstone.response.LoginResponse
import com.nd.capstone.response.LoginResult
import kotlinx.coroutines.launch
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class LoginViewModel(private val pref: UserPreference) : ViewModel() {
    private val _isLogin = MutableLiveData<Boolean>()
    val isLogin: LiveData<Boolean> = _isLogin
    fun getUser(): LiveData<LoginResult> {
        return pref.getUser().asLiveData()
    }

    fun saveUser(loginResult: LoginResult) {
        viewModelScope.launch { pref.saveUser(loginResult) }
    }

    fun loginUser(email: String, password: String) {
        ApiConfig.getApiService().userLogin(email, password)
            .enqueue(object: Callback<LoginResponse> {
                override fun onResponse(call: Call<LoginResponse>, response: Response<LoginResponse>) {
                    if (response.isSuccessful){
                        _isLogin.value = true
                        response.body()?.let { saveUser(it.loginResult) }
                        Log.d(TAG, "Success")
                    } else {
                        _isLogin.value = false
                        Log.e(TAG, "onFailure: ${response.message()}")
                    }
                }

                override fun onFailure(call: Call<LoginResponse>, t: Throwable) {
                    _isLogin.value = false
                    Log.e(TAG, "onFailure: ${t.message.toString()}")
                }
            }
            )
    }

    companion object {
        private const val TAG = "LoginViewModel"
    }
}