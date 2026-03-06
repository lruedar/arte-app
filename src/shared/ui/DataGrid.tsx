"use client";

interface DataGridProps<T> {
  items: T[];
  loading: boolean;
  error: string | null;
  renderItem: (item: T) => React.ReactNode;
  emptyMessage?: string;
}

export function DataGrid<T>({
  items,
  loading,
  error,
  renderItem,
  emptyMessage = "No hay elementos para mostrar"
}: DataGridProps<T>) {

  if (loading) return <div className="p-10 text-center text-gray-500">Cargando datos...</div>;
  if (error) return <div className="p-10 text-center text-red-500 bg-red-50 rounded-lg">{error}</div>;
  if (items.length === 0) return <div className="p-10 text-center text-gray-400">{emptyMessage}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}