import { useId } from "react"

const UniqueId = () => {

    const id = useId()

  return (
    <div>
        <label htmlFor={`${id}--email`}>Email</label>
        <input type="Email" id={`${id}--email`}/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae id, unde, iure eveniet possimus beatae nam tenetur facere aliquam obcaecati quisquam ex quasi architecto doloribus iusto asperiores voluptates dicta, incidunt 
            nesciunt consequuntur officiis. Iusto!</p>
        <label htmlFor={`${id}--password`}>Email</label>
        <input type="Email" id={`${id}--password`}/>
    </div>
  )
}

export default UniqueId