import { createClient } from '@supabase/supabase-js'
import { debug } from 'console'
import { json } from 'stream/consumers'

if (!process.env.NEXT_PUBLIC_SUPABASE_KEY) {
    throw new Error('Missing SUPABASE_KEY')
    }
    
const supabaseUrl = 'https://uvaqjfxzlpgvwyaylghu.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function signup(inputEmail: String): Promise<void> {
    const { data, error } = await supabase
    .from('prospect')
    .insert([
      { email: {inputEmail}},
    ])
}

export function getEmailfromInput() {
    const inputEmail = (document.getElementById("emailInput") as HTMLInputElement)!.value;
    return inputEmail;
}
