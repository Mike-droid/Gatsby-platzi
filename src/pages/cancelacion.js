import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function gracias() {
  return (
    <div>
      <SEO title="Compra Cancelada" />
      <Purchase>
        <h2>Compra Cancelada 😭</h2>
        <p>Qué pena que no hayas comprado tu swag</p>
        <p>Recuerda que te seguirá esperando si decides volver</p>
        <p>Mientras tanto, ¡no olvides nunca parar de aprender!</p>
        <span rol='img' aria-label='emoji'>🐱‍🏍</span>
        <Link to='/'>
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
