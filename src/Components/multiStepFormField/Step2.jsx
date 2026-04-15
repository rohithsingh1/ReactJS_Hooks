import React from 'react'

function Step2({formData, updateFormData, currentStep}) {
    return (
        <div style={{display: 'flex', flexDirection: "column", gap: 12}} >
            <div>
                <label htmlFor='address'>Address</label>
                <textarea rows={4} cols={8} id='address' value={formData.address} onChange={(e) => updateFormData('address', e.target.value, currentStep)} ></textarea>
            </div>
        </div>
    )
}

export default Step2