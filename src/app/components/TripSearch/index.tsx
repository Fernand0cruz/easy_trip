import CurrencyInput from '@/components/CurrencyInput';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input'
import React from 'react'

const TripSerch = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-2xl text-center text-primaryLighter">Busque por sua próxima viagem!</h1>
      <div className="flex flex-col gap-4 mt-5 ">
        <Input placeholder="Para onde quer ir?" />
        <div className="flex gap-4">
          <DatePicker placeholderText="Data de ida" onChange={() => {}} className="w-full"/>
          <CurrencyInput placeholder="Orçamento" className="w-full"  />
        </div>
      </div>
    </div>
  )
}

export default TripSerch