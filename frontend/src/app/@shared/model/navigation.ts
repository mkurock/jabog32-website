export class NavGroup {
    title:string;
    children:NavItem[];
    constructor(title:string){
        this.title = title;
        this.children = [];
    }
}
export class NavItem {
    title:string;
    url:string;
    icon:string;
}
export class NavBuilder {
    navigation:NavGroup[] = [];
    constructor(){
        this.navigation = [
            {
                title: 'Home',
                children: [
                  {
                    title: 'Dasboard',
                    url: '/',
                    icon: "home"
                  },
                  {
                    title: 'NOTAMs',
                    url: '/notams',
                    icon: "tasks"
                  },
                  {
                    title: 'Abmeldungen',
                    url: '/absences',
                    icon: "coffee"
                  },
                  {
                    title: 'Piloten Stats',
                    url: '/stats',
                    icon: 'star'
                  },
                  {
                    title: 'Flight Planing Tool',
                    url: '/fpt',
                    icon: "plane-departure"
                  }
                ]
              }
        ];
    }

    addNavItem(group:string, title:string, url:string, icon:string){
        let grp = this.navigation.find(x => x.title == group);
        if(!grp){
            grp = new NavGroup(group);
            this.navigation.push(grp);
        }
        grp.children.push({ title, url, icon });
    }
}