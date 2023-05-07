import { supabase } from '../supabaseClient'

export const loginServices = {
    async add(login, password){
        const { data, error } = await supabase.from('account').select().eq("login", login)
        if (data.length) {
            return null
        }
        await supabase.from('account').insert({ login, password })
    },
    async get(login, password){
        let account = {
            "login": ""
        }
        account.login = sessionStorage.getItem("login")
        if (account.login) {
            return account
        }
        const { data, error } = await supabase.from('account').select().eq("login", login)
        if (!data.length) {
            return null
        }
        if (data[0].password !== password){ 
            return null
        }
        if (error) {
            return error
        }
        sessionStorage.setItem("login", data[0].login)
        return data[0]
    },
    async remove() {
        sessionStorage.removeItem("login")
    }
}