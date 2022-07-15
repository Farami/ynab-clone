import BudgetHeader from '@/components/organisms/BudgetHeader';
import BudgetList from '@/components/organisms/BudgetList';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="You Need A You Need A Budget Clone" description="Sup?" />
      }
    >
      <BudgetHeader />
      <BudgetList />
      {/* Optional right sidebar */}
    </Main>
  );
};

export default Index;
