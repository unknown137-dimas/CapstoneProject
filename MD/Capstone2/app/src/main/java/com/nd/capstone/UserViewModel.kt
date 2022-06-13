package com.nd.capstone


import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nd.capstone.model.UserPreference
import kotlinx.coroutines.launch

class UserViewModel(private val pref: UserPreference) : ViewModel() {


    fun logout() {
        viewModelScope.launch {
            pref.logout()
        }
    }
}