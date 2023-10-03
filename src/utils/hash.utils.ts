import bcrypt from 'bcrypt'
import { log } from 'console'

export default class Hash{
    constructor(
        private salt: 10,
        private bcrypt: bcrypt
    ) {}

    async hashData(data: string) {

        try{
            const salt = await this.bcrypt.genSalt(this.salt)
            const hash = await bcrypt.hash(data, salt)

            return hash

        } catch(error){
            console.log(error.message);         
        }
    }

    async hashCompareData(data: string, dataToCompare: string) {

        try{
            const salt = await this.bcrypt.genSalt(this.salt)
            const hash = await bcrypt.hash(data, salt)

            const compareData = await this.bcrypt.compare(dataToCompare, hash)

            return compareData

        } catch(error){
            console.log(error.message);         
        }
    }
}