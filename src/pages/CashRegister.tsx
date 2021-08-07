import React from 'react';
import { totalCharge } from '../modules/registerFunctions'



const CashRegister: React.FC = () => {
    const [charge, setCharge] = React.useState<string>("")
    const [chargeList, setChargeList] = React.useState<Array<string>>([])


    //Creates the charge list from the accepted charges
    function addChargeToList(newChargeAmount: string) {
        if (newChargeAmount === "") {
            return
        }
        setChargeList([...chargeList, newChargeAmount])
        setCharge("")

    }


    //Handles the floating number conversion from user input
    function handleCharge(event: React.ChangeEvent<HTMLInputElement>) {
        let start: any = event.target.selectionStart!;
        let val: string = event.target.value;
        val = val.replace(/([^0-9.]+)/, "");
        val = val.replace(/^(0|\.)/, "");
        const match = /(\d{0,7})[^.]*((?:\.\d{0,2})?)/g.exec(val);
        const value = match![1] + match![2];
        setCharge(value)
        if (val.length > 0) {
            event.target.value = Number(value).toFixed(2);
            event.target.setSelectionRange(start, start);
            setCharge(Number(value).toFixed(2));
        }

    }
    return (
        <div>
            <input type="text" name="captureCharge" placeholder="0.00" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCharge(e)} value={charge} />
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
