/* ═══════════════════════════════════════════════════════
   src/hooks/useScrollReveal.js
   Hook personalizado para animações de aparecimento ao scroll
   ═══════════════════════════════════════════════════════

   Como funciona:
   1. O hook cria um IntersectionObserver que observa todos os
      elementos com a classe "reveal" na página.
   2. Quando um elemento entra no viewport, adiciona a classe
      "visible", que ativa a transição CSS definida em index.css.
   3. O observer é removido quando o componente desmonta (cleanup).
*/
import { useEffect } from 'react'

/**
 * useScrollReveal — Ativa animações de entrada ao scroll.
 *
 * Deve ser chamado no componente de página após o render.
 * Automaticamente encontra todos os elementos ".reveal" na página.
 *
 * @param {any[]} deps - Dependências opcionais para re-executar o efeito
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    // Seleciona todos os elementos marcados com a classe "reveal"
    const revealElements = document.querySelectorAll('.reveal')

    // Configura o observador de interseção
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Elemento entrou no viewport: adiciona a classe "visible"
            entry.target.classList.add('visible')
            // Deixa de observar o elemento (animação acontece só uma vez)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        // rootMargin: começa a animação quando o elemento está a 60px de entrar
        rootMargin: '0px 0px -60px 0px',
        // threshold: 10% do elemento deve estar visível para disparar
        threshold: 0.1,
      }
    )

    // Observa cada elemento
    revealElements.forEach((el) => observer.observe(el))

    // Cleanup: desconecta o observer quando o componente desmonta
    return () => observer.disconnect()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
