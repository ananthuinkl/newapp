"use client"
import { Stack, Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'


const skill = {
  id: 1,
  label: "Example Skill"
};


const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}))

export const MuiAutocomplete = () => {
  const [skill, setSkill] = useState(null); // Assuming null is the initial state value
  const [value, setValue] = useState(null); // Assuming null is the initial state value
  
  console.log(skill)
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        options={skills}
        renderInput={params => <TextField {...params} label='Skills' />}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={params => <TextField {...params} label='Skills' />}
        value={skill}
        onChange={(event, newValue) => {
          setSkill(newValue);
        }}
        
      />
    </Stack>
  )
}
