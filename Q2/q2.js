class InvoiceDetails{
    constructor(){
        this.invoiceTotalWithChargesNotMisc = {
            total:Number,
            NotMisc:[]
    }
    }

    showInvoiceDetails(){
        return {
            "id": 123456,
            "total": 560.32,
            "taxes": 32.65,
            "status": "PENDING",
            "startDate": "2018-01-01",
            "endDate": "2018-01-31",
            "charges": [{
            "type": "LINE_CHARGE",
            "total": 80.21
            },{
            "type": "MONTHLY_CHARGE",
            "total": 332.21
            },{
            "type": "INSURANCE",
            "total": 34.56
            },{
            "type": "MISC",
            "total": 80.69
            }]
        }
    }

    invoice(){
        if(this.showInvoiceDetails().status == "PENDING"){
            this.invoiceTotalWithChargesNotMisc.total = this.showInvoiceDetails().total;
            const chargesNotMisc = this.showInvoiceDetails().charges.filter(function(charge){
                    if(charge.type !== "MISC"){
                       return charge;      
                    }
            });
            this.invoiceTotalWithChargesNotMisc.NotMisc = chargesNotMisc;
            return this.invoiceTotalWithChargesNotMisc;
        }
    }
    
}

const invoiceDetails = new InvoiceDetails()
console.log(invoiceDetails.invoice()); 