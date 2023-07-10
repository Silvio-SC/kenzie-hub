import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { Dashboard } from '../pages/Dashboard'
import { PublicRoutes } from '../components/PublicRoutes'
import { ProtectRoutes } from '../components/ProtectRoutes'

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />} >
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}