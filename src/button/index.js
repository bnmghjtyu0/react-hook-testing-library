import React, { useState } from 'react'
const Button = (props) => {
    const [form, setForm] = useState({ name: '' } || props.data)
    const [datas, setDatas] = useState([])
    const [toggle, setToggle] = useState(false)
    const postData = (data) => {
        setToggle(!toggle)
        setDatas(data)
        setForm({
            ...form,
            name: ''
        })
    }
    const evModify = () => {
        console.log(form)
        setToggle(!toggle)
    }

    const evToggle = () => {
        setToggle(!toggle)
        setForm({
            ...form,
            name: ''
        })
    }
    return (
        <div>
            {toggle ?
                <div>
                    <input type="text" name="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    <button data-testid="btn-toggle" onClick={evModify}>要修改</button>
                    <button data-testid="btn-toggle" onClick={evToggle}>不修改</button>
                </div> :
                <div>
                    <button data-testid="btn-toggle" onClick={e => postData(e, props.data)}>修改</button>
                    <span>{form.name || props.data.name}</span>
                </div>
            }
        </div>
    )
}

export default Button