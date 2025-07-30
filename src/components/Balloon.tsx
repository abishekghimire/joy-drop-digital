interface BalloonProps {
  color: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Balloon = ({ color, size = 'medium', className = '' }: BalloonProps) => {
  const sizeClasses = {
    small: 'w-8 h-10',
    medium: 'w-12 h-14',
    large: 'w-16 h-20'
  };

  const stringHeight = {
    small: 'h-16',
    medium: 'h-24',
    large: 'h-32'
  };

  return (
    <div className={`relative ${className}`}>
      {/* Balloon */}
      <div className={`${sizeClasses[size]} relative`}>
        <div 
          className={`w-full h-full rounded-full shadow-lg`}
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${color}dd)`,
            boxShadow: `0 4px 15px ${color}40`
          }}
        />
        {/* Balloon highlight */}
        <div 
          className="absolute top-2 left-2 w-3 h-4 bg-white/40 rounded-full blur-sm"
        />
        {/* Balloon tie */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2"
          style={{ backgroundColor: color }}
        />
      </div>
      
      {/* String */}
      <div 
        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-400 ${stringHeight[size]} opacity-70`}
      />
    </div>
  );
};