import { supabase } from '../supabaseClient'

export const todoServices = {
    async add(id, name, reason, owner){
        const { error } = await supabase.from('people').insert({ id, name, reason, owner })
        console.log(owner)
    },
    async del(id){
        const { error } = await supabase.from('people').delete().eq('id', id)
    },
    async end(id){
        const { error } = await supabase.from('people').update({ killed: true }).eq('id', id)
    },
    async upd(id, name, reason){
        const { error } = await supabase.from('people').update({ name, reason }).eq('id', id)
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