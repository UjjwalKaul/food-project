import MyRecipes from '@/components/MyRecipes';
import SearchBar from '@/components/SearchBar';

const DashBoardPage = () => {
  return (
    <div className="mb-10 p-2">
      <div className="flex justify-center m-2">
        <MyRecipes />
      </div>
      <SearchBar />
    </div>
  );
};

export default DashBoardPage;
