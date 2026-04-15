import React from 'react'

function Step3({formData, updateFormData, currentStep}) {
    return (
        <div style={{display: 'flex', flexDirection: "column", gap: 12}} >
            <div>
                <label htmlFor='experience'>Experience</label>
                <textarea rows={4} cols={8} id='experience' value={formData.experience} onChange={(e) => updateFormData('experience', e.target.value, currentStep)} ></textarea>
            </div>
        </div>
    )
}

export default Step3