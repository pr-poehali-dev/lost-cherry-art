import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const fragrances = [
  {
    id: 1,
    name: 'Lost Cherry',
    brand: 'Tom Ford',
    category: 'Ароматы',
    notes: ['Вишня', 'Миндаль', 'Сандал'],
    description: 'Чувственный аромат с оттенками вишни, миндаля и ликера. Загадочный и провокационный.',
    image: 'https://cdn.poehali.dev/projects/c4f8771d-132e-455d-aedf-31930b891981/files/8833f1d6-3968-4a86-b58f-3841bd66f0f7.jpg',
    price: '25 000 ₽',
    year: 2018,
    gender: 'Unisex'
  },
  {
    id: 2,
    name: 'Aqua Veil',
    brand: 'Luxvisage',
    category: 'Косметика',
    notes: ['Гиалурон', 'Витамины', 'SPF-защита'],
    description: 'Легкий тональный крем-флюид с комплексом гиалуроновой кислоты. Естественное покрытие и увлажнение.',
    image: 'https://cdn.poehali.dev/projects/c4f8771d-132e-455d-aedf-31930b891981/files/5ef450d1-5045-48fd-b614-b8bf81c0d8a4.jpg',
    price: '1 200 ₽',
    year: 2024,
    gender: 'Женский'
  },
  {
    id: 3,
    name: 'Black Orchid',
    brand: 'Tom Ford',
    category: 'Ароматы',
    notes: ['Чёрная орхидея', 'Пачули', 'Ваниль'],
    description: 'Роскошный тёмный аромат с нотами чёрной орхидеи и пачули.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
    price: '22 000 ₽',
    year: 2006,
    gender: 'Unisex'
  },
  {
    id: 4,
    name: 'Tobacco Vanille',
    brand: 'Tom Ford',
    category: 'Ароматы',
    notes: ['Табак', 'Ваниль', 'Специи'],
    description: 'Тёплый, пряный аромат с нотами табака и ванили.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400',
    price: '24 000 ₽',
    year: 2007,
    gender: 'Unisex'
  },
  {
    id: 5,
    name: 'Oud Wood',
    brand: 'Tom Ford',
    category: 'Ароматы',
    notes: ['Уд', 'Сандал', 'Кардамон'],
    description: 'Элегантный древесный аромат с редким удом и специями.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400',
    price: '28 000 ₽',
    year: 2007,
    gender: 'Unisex'
  }
];

const categories = ['Все', 'Ароматы', 'Косметика'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedFragrance, setSelectedFragrance] = useState<typeof fragrances[0] | null>(null);

  const filteredFragrances = selectedCategory === 'Все' 
    ? fragrances 
    : fragrances.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">Essence</h1>
          <div className="flex gap-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Главная
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Каталог
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 border-b border-border">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
            Мир красоты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Откройте для себя коллекцию изысканных парфюмов, косметики и историй, 
            которые они рассказывают
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
              Исследовать каталог
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
              О ароматах
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold text-foreground">Каталог</h3>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'border-border text-foreground hover:border-primary'}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFragrances.map((fragrance, index) => (
              <Card 
                key={fragrance.id}
                className="bg-card border-border overflow-hidden cursor-pointer hover:border-primary transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedFragrance(fragrance)}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={fragrance.image} 
                    alt={fragrance.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="bg-primary text-primary-foreground mb-2">
                      {fragrance.category}
                    </Badge>
                    <h4 className="text-xl font-bold text-white mb-1">{fragrance.name}</h4>
                    <p className="text-sm text-gray-300">{fragrance.brand}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedFragrance && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedFragrance(null)}
        >
          <Card 
            className="bg-card border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img 
                  src={selectedFragrance.image} 
                  alt={selectedFragrance.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <Badge className="bg-primary text-primary-foreground mb-3">
                    {selectedFragrance.category}
                  </Badge>
                  <h3 className="text-4xl font-bold text-foreground mb-2">
                    {selectedFragrance.name}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-4">
                    {selectedFragrance.brand}
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {selectedFragrance.price}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Icon name="Info" size={20} className="text-primary" />
                    О продукте
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedFragrance.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Icon name="Sparkles" size={20} className="text-primary" />
                    Ключевые компоненты
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFragrance.notes.map((note) => (
                      <Badge key={note} variant="outline" className="border-primary text-foreground">
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Год выпуска</p>
                    <p className="text-lg font-semibold text-foreground">{selectedFragrance.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Для кого</p>
                    <p className="text-lg font-semibold text-foreground">{selectedFragrance.gender}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    Добавить в избранное
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-border hover:border-primary"
                    onClick={() => setSelectedFragrance(null)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <footer className="border-t border-border py-12 px-4 mt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Essence</h2>
          <p className="text-muted-foreground mb-6">
            Ваш проводник в мир изысканных ароматов
          </p>
          <div className="flex justify-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">О нас</a>
            <a href="#" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}