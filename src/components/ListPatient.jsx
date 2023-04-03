import Patient from "./Patient";

const ListPatient = ({patients, setPatient, deletePatient}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen  ">
        {patients && patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Patients list</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Manage your {''}
              <span className="text-indigo-600 font-bold">Patients and Appointments</span>
            </p>
    
            { patients.map( patient => (
                   <Patient
                   key={patient.id}
                   patient={patient}
                   setPatient={setPatient}
                   deletePatient={deletePatient}
                   />
            ))}
            </>
        ): (
          <>
            <h2 className="font-black text-3xl text-center">No patients</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Add your patients {''}
              <span className="text-indigo-600 font-bold">and they'll show here</span>
            </p>
          </>
        )}
      

   

    </div>
  )
}

export default ListPatient


