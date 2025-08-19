import {Inter, Lusitana} from "next/font/google"

export const inter = Inter({subsets:['latin']}) 
export const lusitana = Lusitana({subsets:["latin"],weight:["400", "700"]})

//Each fonts supports many writing system
//By choosing a subset, you load only the characters you need 
//→ smaller font files, faster site.