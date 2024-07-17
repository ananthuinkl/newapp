"use client"
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState('')
  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'absolute', bottom: 0 }}
      showLabels
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}>
      <BottomNavigationAction label='Home' icon={<HomeIcon />} />
      <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
      <BottomNavigationAction label='Profile' icon={<PersonIcon />} />
    </BottomNavigation>
  )
}
