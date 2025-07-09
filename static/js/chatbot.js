// Chatbot functionality
class Chatbot {
    constructor() {
        this.isOpen = false;
        this.sessionId = this.generateSessionId();
        this.messages = [];
        this.init();
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    init() {
        this.createChatbotHTML();
        this.bindEvents();
        this.addWelcomeMessage();
    }

    createChatbotHTML() {
        const chatbotContainer = document.getElementById('chatbot-container');
        chatbotContainer.innerHTML = `
            <!-- Chatbot Toggle Button -->
            <button id="chatbot-toggle" class="chatbot-toggle">
                <i class="fas fa-comments"></i>
            </button>

            <!-- Chatbot Window -->
            <div id="chatbot-window" class="chatbot-window" style="display: none;">
                <!-- Header -->
                <div class="chatbot-header">
                    <div class="d-flex align-items-center">
                        <div class="message-avatar bg-white text-primary me-2">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div>
                            <h6 class="mb-0">Assistant AquaTerre</h6>
                            <small class="opacity-75">En ligne</small>
                        </div>
                    </div>
                    <button id="chatbot-close" class="btn btn-sm text-white">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <!-- Messages -->
                <div id="chatbot-messages" class="chatbot-messages">
                    <!-- Messages will be added here -->
                </div>

                <!-- Quick Replies -->
                <div class="px-3">
                    <small class="text-muted">Réponses rapides :</small>
                    <div class="quick-replies mt-2">
                        <button class="quick-reply" data-message="Prix des systèmes aquaponiques">Prix</button>
                        <button class="quick-reply" data-message="Comment fonctionne l'aquaponie ?">Fonctionnement</button>
                        <button class="quick-reply" data-message="Services d'installation">Installation</button>
                        <button class="quick-reply" data-message="Formation disponible">Formation</button>
                        <button class="quick-reply" data-message="Maintenance et SAV">Maintenance</button>
                        <button class="quick-reply" data-message="Demander un devis">Devis</button>
                    </div>
                </div>

                <!-- Input -->
                <div class="chatbot-input">
                    <div class="input-group">
                        <input type="text" id="chatbot-input" class="form-control" 
                               placeholder="Tapez votre message...">
                        <button id="chatbot-send" class="btn btn-primary">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Toggle chatbot
        document.getElementById('chatbot-toggle').addEventListener('click', () => {
            this.toggle();
        });

        // Close chatbot
        document.getElementById('chatbot-close').addEventListener('click', () => {
            this.close();
        });

        // Send message
        document.getElementById('chatbot-send').addEventListener('click', () => {
            this.sendMessage();
        });

        // Send message on Enter
        document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Quick replies
        document.querySelectorAll('.quick-reply').forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.getAttribute('data-message');
                document.getElementById('chatbot-input').value = message;
                this.sendMessage();
            });
        });
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        document.getElementById('chatbot-window').style.display = 'flex';
        document.getElementById('chatbot-toggle').style.display = 'none';
        this.isOpen = true;
        this.scrollToBottom();
    }

    close() {
        document.getElementById('chatbot-window').style.display = 'none';
        document.getElementById('chatbot-toggle').style.display = 'flex';
        this.isOpen = false;
    }

    addWelcomeMessage() {
        const welcomeMessage = "Bonjour ! Je suis l'assistant virtuel d'AquaTerre. Comment puis-je vous aider aujourd'hui ?";
        this.addMessage('bot', welcomeMessage);
    }

    addMessage(sender, content) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const avatar = sender === 'bot' ? 
            '<div class="message-avatar bg-primary"><i class="fas fa-robot"></i></div>' :
            '<div class="message-avatar bg-success"><i class="fas fa-user"></i></div>';
        
        messageDiv.innerHTML = `
            ${avatar}
            <div class="message-content">
                ${content.replace(/\n/g, '<br>')}
                <div class="text-muted mt-1" style="font-size: 0.75rem;">
                    ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        // Store message
        this.messages.push({
            sender: sender,
            content: content,
            timestamp: new Date()
        });
    }

    addTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <div class="message-avatar bg-primary"><i class="fas fa-robot"></i></div>
            <div class="message-content">
                <div class="d-flex align-items-center">
                    <div class="loading me-2"></div>
                    <span>En train d'écrire...</span>
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message
        this.addMessage('user', message);
        input.value = '';
        
        // Show typing indicator
        this.addTypingIndicator();
        
        try {
            // Send to backend
            const response = await fetch('/chatbot/message/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': this.getCSRFToken()
                },
                body: JSON.stringify({
                    message: message,
                    session_id: this.sessionId
                })
            });
            
            const data = await response.json();
            
            // Remove typing indicator
            this.removeTypingIndicator();
            
            if (data.success) {
                // Add bot response
                this.addMessage('bot', data.response);
            } else {
                this.addMessage('bot', 'Désolé, une erreur s\'est produite. Veuillez réessayer.');
            }
            
        } catch (error) {
            console.error('Erreur chatbot:', error);
            this.removeTypingIndicator();
            this.addMessage('bot', 'Désolé, je ne peux pas répondre pour le moment. Veuillez contacter notre équipe directement.');
        }
    }

    getCSRFToken() {
        const token = document.querySelector('[name=csrfmiddlewaretoken]');
        return token ? token.value : '';
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new Chatbot();
});