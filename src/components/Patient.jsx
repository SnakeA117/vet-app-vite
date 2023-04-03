const Patient = ({patient, setPatient, deletePatient}) => {


  const { name, owner, email, date, syntoms, id } = patient;
  const handleDelete = () => {
    const response = confirm('Do you want to delete this patient?')
    if (response) {
      deletePatient(id)
    }
  }
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
      <span className="font-normal normal-case">{name}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
      <span className="font-normal normal-case">{owner}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
      <span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Discharge: {''}
      <span className="font-normal normal-case">{date}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
      <span className="font-normal normal-case">{syntoms}</span>
    </p>

    <div className="flex justify-between mt-10">
      <button 
      type="button"
      className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white
      font-bold uppercase rounded"
      onClick={()=> setPatient(patient)}
      >Edit</button>

      <button 
      type="button"
      className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white
      font-bold uppercase rounded"
      onClick={handleDelete}
      >Delete</button>
    </div>
  </div>
  )
}

export default Patient