import React from 'react'

function Step1({formData, updateFormData, currentStep}) {
    return (
        <div style={{display: 'flex', flexDirection: "column", gap: 12}} >
            <div>
                <label htmlFor='first_name'>First Name</label>
                <input required id='first_name' value={formData.first_name} onChange={(e) => updateFormData('first_name', e.target.value, currentStep)} />
            </div>
            <div>
                <label htmlFor='last_name'>Last Name</label>
                <input required id='last_name' value={formData.last_name} onChange={(e) => updateFormData('last_name', e.target.value, currentStep)} />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input required id='email' type="email" value={formData.email} onChange={(e) => updateFormData('email', e.target.value, currentStep)} />
            </div>
            <div>
                <label htmlFor='date_of_birth'>Date of Birth</label>
                <input required id='date_of_birth' type="date" value={formData.date_of_birth} onChange={(e) => updateFormData('date_of_birth', e.target.value, currentStep)} />
            </div>
        </div>
    )
}

export default Step1