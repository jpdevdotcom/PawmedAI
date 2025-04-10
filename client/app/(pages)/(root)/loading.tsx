// app/classify-disease/loading.tsx
export default function Loading() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="text-center space-y-4">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF7800] mx-auto"></div>
				<p className="text-gray-600">Loading PawMed AI...</p>
			</div>
		</div>
	);
}
