import { MessageCircle } from 'lucide-react'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/254748717099" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  )
}
