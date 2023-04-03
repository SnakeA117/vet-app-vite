import { useState, useEffect } from "react";
import Error from "./Error";


const Form = ({ patients, setPatients, patient, setPatient}) => {

  // [Var, Function]
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [syntoms, setSyntoms] = useState('');
  const [error, setError] = useState(false);


  // Modify form
  useEffect(() => {
    if(Object.keys(patient).length > 0) {
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSyntoms(patient.syntoms)
    } 
  }, [patient])

  const generateID = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36)

    return random + date;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate Form

    if([name, owner, email, date, syntoms].includes('')) {
      console.error('Empty fields found')
      setError(true)
      return;
    } 
    setError(false)


    // Patient Object
    const objectPatient = {
      name, 
      owner, 
      email, 
      date, 
      syntoms,
    }

    if(patient.id) {
    // Edit patient register
    objectPatient.id = patient.id
    const updatedPatients = patients.map(patientState => patientState.id === 
      patient.id ? objectPatient : patientState)

    setPatients(updatedPatients)
    setPatient({})
    } else {
    // New register
      objectPatient.id = generateID();
      setPatients([...patients, objectPatient]);
    }
    // Restart form
    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSyntoms('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Patient Follow up</h2>

        <p className="text-lg mt-5 text-center mb-10">Add Patients & {''}
        <span className="text-indigo-600 font-bold">Customize</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          {error && <Error message='All fields are mandatory'/>}

          <div className="mb-5">
            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
              Pet's name</label>
            <input 
            id="pet"
            type="text" 
            placeholder="Pet's name" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
              Owner's Name</label>
            <input 
            id="owner"
            type="text" 
            placeholder="Owner's name" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              EMAIL</label>
            <input 
            id="email"
            type="email" 
            placeholder="Contact Email" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="discharge" className="block text-gray-700 uppercase font-bold">
              DISCHARGE</label>
            <input 
            id="discharge"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="syntoms" className="block text-gray-700 uppercase font-bold">
              Symptoms
              </label>
              <textarea 
              id="symptoms" 
              placeholder="Describe the symptoms" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={syntoms}
              onChange={(e) => setSyntoms(e.target.value)}
              />
          </div>

          <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={patient.id ? 'Edit Patient' : 'Add Patient'}
          />

        </form>
    </div>
  )
}

export default Form
