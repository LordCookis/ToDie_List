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
        const { data, error } = await supabase.from('account').select().eq("login", login)
        if(!data.length)
            return null
        if(data[0].password !== password)
            return null
        if (error)
            return error
        return data[0]
    }
}