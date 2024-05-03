// BEGIN
function setNumer(numer)
{
    this.numer = numer;
};

function setDenom(denom)
{
    this.denom = denom;
};

function getNumer()
{
    return this.numer;
};

function getDenom()
{
    return this.denom;
};

function add(rat)
{
    return make(this.getNumer() * rat.getDenom() + this.getDenom() * rat.getNumer(),
    (this.getDenom() * rat.getDenom()));
};

function toString()
{
    return `${this.getNumer()}/${this.getDenom()}`;
};

const make = (numer, denom) => {
    return {
        numer,
        denom,
        setNumer,
        setDenom,
        getNumer,
        getDenom, 
        toString,
        add
    }
}
// END
export default make;