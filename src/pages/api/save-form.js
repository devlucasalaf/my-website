import {GoogleSpreadsheet} from 'google-spreadsheet'
import { fromBase64 } from '../../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)
export default async (req, res) => {
    
    try {
    await doc.useServiceAccountAuth({
        client_email: process.env.SHEET_CLIENT_EMAIL ,
        private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
    const data = JSON.parse(req.body)

    await sheet.addRow({
        Nome: data.Nome,
        Email: data.Email,
        Mensagem: data.Mensagem
    })
    res.end(req.body)
   } catch (err) {
       console.log(err)
       res.end('Error')
   }  

}
