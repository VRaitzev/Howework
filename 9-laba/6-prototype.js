// BEGIN
Money.prototype.getValue = function()
{
    return this.value;
}

Money.prototype.getCurrency = function()
{
    return this.currency;
}

Money.prototype.exchangeTo = function(currency)
{
    const EUR_COFF = 0.7;
    const USD_COFF = 1.2;
    let nv;
    if (this.currency === currency)
        nv = this.value;
    else{
        if (currency === 'usd')
            {
            nv = this.value*USD_COFF;
            }
        if (currency === 'eur')
            {
            nv = this.value*EUR_COFF;
            }
    }
    return new Money(nv, currency);
}

Money.prototype.add = function(money)
{
    money = money.exchangeTo(this.getCurrency())
    return new Money(this.getValue()+money.getValue(), this.getCurrency())
}

Money.prototype.format = function() 
{
    return (this.getValue()).toLocaleString(undefined, { style: 'currency', currency: this.currency });
}


export function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }
  

  
export default Money;
// END
