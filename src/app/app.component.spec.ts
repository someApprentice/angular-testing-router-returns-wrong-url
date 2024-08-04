import { TestBed } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter, Router } from '@angular/router';

import { MainComponent } from './main/main.component';
import { RoutedComponent } from './routed/routed.component';

describe('AppComponent', () => {
  let harness: RouterTestingHarness

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: '', component: MainComponent },
          { path: 'routed', component: RoutedComponent }
        ])
      ]
    }).compileComponents();

    harness = await RouterTestingHarness.create();
  });

  it('should create the app', async () => {
    let component = await harness.navigateByUrl('', MainComponent);

    expect(component).toBeTruthy()
  });

  it('should navigate to routed page', async () => {
    await harness.navigateByUrl('', MainComponent);

    let router = TestBed.inject(Router);
    let navigateSpy = spyOn(router, 'navigate');

    let hostElement: HTMLElement = harness.routeNativeElement!;
    let goButton: HTMLButtonElement = hostElement.querySelector('button')!;

    goButton.click();

    expect(navigateSpy).toHaveBeenCalledWith(['routed']); // pass
    expect(router.url).toEqual('/routed'); // Expected '/' to equal '/routed'.
  });
});
