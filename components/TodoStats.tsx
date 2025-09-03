'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle2, Clock, ListTodo } from 'lucide-react';

interface TodoStatsProps {
  todoCount: {
    all: number;
    active: number;
    completed: number;
  };
}

export function TodoStats({ todoCount }: TodoStatsProps) {
  const completionRate = todoCount.all > 0 ? Math.round((todoCount.completed / todoCount.all) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <ListTodo className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">Total Tasks</p>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{todoCount.all}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-600 rounded-lg">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm text-orange-700 dark:text-orange-300 font-medium">Active</p>
            <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">{todoCount.active}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-600 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm text-green-700 dark:text-green-300 font-medium">Completed</p>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{todoCount.completed}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}