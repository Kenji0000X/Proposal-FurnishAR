export const imageMap: Record<string, string> = {
  'sofa-modern': 'https://images.unsplash.com/photo-1763565909003-46e9dfb68a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwZnVybml0dXJlJTIwc29mYXxlbnwxfHx8fDE3NzkzMzM4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'dining-rustic': 'https://images.unsplash.com/photo-1649446326916-a25f51098f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB3b29kZW4lMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NzkzMzM4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'bed-minimal': 'https://images.unsplash.com/photo-1726108397211-6507220a6a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkJTIwZnJhbWUlMjBiZWRyb29tfGVufDF8fHx8MTc3OTMzMzgyOXww&ixlib=rb-4.1.0&q=80&w=1080',
  'cabinet-classic': 'https://images.unsplash.com/photo-1777027518757-a977cadb3739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbmV0JTIwZnVybml0dXJlfGVufDF8fHx8MTc3OTMzMzgyOXww&ixlib=rb-4.1.0&q=80&w=1080',
  'chair-office': 'https://images.unsplash.com/photo-1688578735122-f37256f1b8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjaGFpciUyMGVyZ29ub21pY3xlbnwxfHx8fDE3NzkzMzM4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'shelf-wall': 'https://images.unsplash.com/photo-1775229917822-0c31bbfbbdb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwbW91bnRlZCUyMHdvb2RlbiUyMHNoZWxmfGVufDF8fHx8MTc3OTMzMzgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
  'chair-bamboo': 'https://images.unsplash.com/photo-1778628286888-1e59f30bded6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBsb3VuZ2UlMjBjaGFpciUyMG5hdHVyYWx8ZW58MXx8fHwxNzc5MzMzODMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'table-coffee': 'https://images.unsplash.com/photo-1628304502420-eaa71f507638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGNvZmZlZSUyMHRhYmxlJTIwbW9kZXJufGVufDF8fHx8MTc3OTMzMzgzMXww&ixlib=rb-4.1.0&q=80&w=1080',
  'sofa-narra': 'https://images.unsplash.com/photo-1775595224313-654bd061b834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwd29vZGVuJTIwc29mYSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3OTMzMzgzMXww&ixlib=rb-4.1.0&q=80&w=1080',
  'ar-hero': 'https://images.unsplash.com/photo-1724908267988-63310819325c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXVnbWVudGVkJTIwcmVhbGl0eSUyMGhvbWV8ZW58MXx8fHwxNzc5MzMzODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
};

export function getProductImage(imageKey: string): string {
  return imageMap[imageKey] || imageMap['sofa-modern'];
}
