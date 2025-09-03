'use client';

import { FilterType } from '@/types/todo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  todoCount: {
    all: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

export function TodoFilter({ currentFilter, onFilterChange, todoCount, onClearCompleted }: TodoFilterProps) {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: todoCount.all },
    { key: 'active', label: 'Active', count: todoCount.active },
    { key: 'completed', label: 'Completed', count: todoCount.completed },
  ];

  return (
    <Card className="p-4 bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={currentFilter === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filter.key)}
              className={cn(
                "transition-all duration-200",
                currentFilter === filter.key
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                  : "hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-300 dark:hover:border-blue-700"
              )}
            >
              {filter.label}
              <span className="ml-2 px-2 py-0.5 text-xs bg-white/20 rounded-full">
                {filter.count}
              </span>
            </Button>
          ))}
        </div>
        
        {todoCount.completed > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearCompleted}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950/20"
          >
            Clear Completed ({todoCount.completed})
          </Button>
        )}
      </div>
    </Card>
  );
}