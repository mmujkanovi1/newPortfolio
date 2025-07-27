import { Component, OnInit } from '@angular/core';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chat-bot',
  standalone: false,
  templateUrl: './chat-bot.html',
  styleUrl: './chat-bot.scss'
})
export class ChatBotComponent implements OnInit {
  isChatOpen = false;
  messages: Message[] = [];
  userInput = '';

  constructor() {}

  ngOnInit(): void {
    // Add welcome message
    this.addBotMessage('Hi! I\'m Mirza\'s portfolio bot. How can I help you today?');
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.addUserMessage(this.userInput);

    // Process the message and get bot response
    this.processMessage(this.userInput);

    // Clear input
    this.userInput = '';
  }

  private addUserMessage(text: string) {
    this.messages.push({
      text,
      isUser: true,
      timestamp: new Date()
    });
  }

  private addBotMessage(text: string) {
    this.messages.push({
      text,
      isUser: false,
      timestamp: new Date()
    });
  }

  private processMessage(message: string) {
    // Simple response logic - can be expanded later
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      this.addBotMessage('Hello! Nice to meet you!');
    } else if (lowerMessage.includes('project')) {
      this.addBotMessage('I can tell you about Mirza\'s projects! He has worked on various web development projects using Angular, React, and other modern technologies.');
    } else if (lowerMessage.includes('contact')) {
      this.addBotMessage('You can reach out to Mirza through his email or LinkedIn profile. Would you like me to share those details?');
    } else if (lowerMessage.includes('experience')) {
      this.addBotMessage('Mirza has experience in full-stack development, with expertise in Angular, TypeScript, and various other technologies.');
    } else {
      this.addBotMessage('I\'m not sure how to help with that. Try asking about projects, experience, or contact information!');
    }
  }
} 