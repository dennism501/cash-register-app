import React from 'react';
import { totalCharge } from '../modules/registerFunctions'



const CashRegister: React.FC = () => {
    const [charge, setCharge] = React.useState<number>(0)
    const [chargeList, setChargeList] = React.useState<Array<number>>([])

    function addChargeToList(newChargeAmount: number) {
        if (newChargeAmount === 0) {
            return
        }
        setChargeList([...chargeList, newChargeAmount])
        setCharge(0)

    }
    return (
        <div>
            <input type="number" name="captureCharge" onChange={(e) => setCharge(parseInt(e.target.value, 10))} value={charge} />
            <button type="submit" onClick={() => addChargeToList(charge)} >Add</button>

            {
                chargeList.map((amount, index) => (
                    <p key={index}>{amount}</p>
                ))

            }
            <span>Total {totalCharge(chargeList)}</span>
        </div >
    );
}

export default CashRegister;
