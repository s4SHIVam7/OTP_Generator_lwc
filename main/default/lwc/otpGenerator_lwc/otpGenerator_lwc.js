import { LightningElement, api } from 'lwc';
export default class OtpGenerator extends LightningElement {
    @api otpLength = 5;
    @api timeDuration = 30;
    generatedOTP ='';
    disabledButton = false;
    showTimer = false;
    timerText = "";
    handleClick() {
        let otpData=[];
        for(let  i=1; i<this.otpLength; i++) {
            otpData.push(Math.floor(Math.random()*10));
        }
        this.generatedOTP = otpData.join('');
        this.disabledButton = true;
        this.showTimer = true;

        let remainingSeconds = this.timeDuration;
        let countDownInterval = setInterval(()=>{
            remainingSeconds --;
            this.timerText =`TO generate next OTP, wait for ${remainingSeconds} seconds`;
            if(remainingSeconds <= 0) {
                clearInterval(countDownInterval);
                this.disabledButton = false;
                this.showTimer = false;
            }
        },1000)
        
    }
}