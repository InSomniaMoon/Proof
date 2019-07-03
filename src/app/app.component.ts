import { Component, AfterContentInit} from '@angular/core';
import { ArticlesService } from './services/articles.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'Proof';
  
  constructor(private articlesService: ArticlesService) { }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  public async ngAfterContentInit() {
    await this.sleep(1)
    this.articlesService.load()
  }
}
