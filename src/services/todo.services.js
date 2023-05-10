import { supabase } from '../supabaseClient'

export const todoServices = {
    async add(id, name, reason, owner){
        await supabase.from('people').insert({ id, name, reason, owner })
    },
    async del(id){
        await supabase.from('people').delete().eq('id', id)
    },
    async end(id){
        await supabase.from('people').update({ killed: true }).eq('id', id)
    },
    async upd(id, name, reason){
        await supabase.from('people').update({ name, reason }).eq('id', id)
    },
    async get(login){
        let data
        if (login) {
            data = await supabase.from('people').select().eq('owner', login)
        } else {
            data = await supabase.from('people').select()
        }  
        return data.data
    }
}