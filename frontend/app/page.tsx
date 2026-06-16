import BlockedSitesSidebar from "./domain/sites/ui/BlockedSitesSidebar";
import SiteCardContainer from "./domain/sites/ui/SiteCardsContainer";

export default function Home() {
  // добавить mock-api, чтобы можно было легко и просто делать тесты и добавлять новые элементы,
  // при этом сразу видя то, как все работает, без использования API
  return (
    <div className="w-full h-full flex flex-row">
      <BlockedSitesSidebar />
      <SiteCardContainer
        className="h-[calc(100vh-64px)] w-full"
        category="tracked"
      />
    </div>
  );
}
